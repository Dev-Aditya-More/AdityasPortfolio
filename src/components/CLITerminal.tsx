import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';
import { executeCommand } from '@/utils/cliCommands';

interface CLITerminalProps {
    onExit: () => void;
}

interface CommandEntry {
    command: string;
    output: string[];
    timestamp: Date;
}

const CLITerminal = ({ onExit }: CLITerminalProps) => {
    const [currentInput, setCurrentInput] = useState('');
    const [commandHistory, setCommandHistory] = useState<CommandEntry[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Show welcome message on load
        const welcomeOutput = [
            '╔══════════════════════════════════════╗',
            '║          PORTFOLIO CLI v1.0          ║',
            '║                                      ║',
            '║        Welcome to my terminal!       ║',
            '║                                      ║',
            '╚══════════════════════════════════════╝',
            '',
            'Type "help" to see available commands.',
            'Type "exit" to return to portfolio view.',
            ''
        ];

        setCommandHistory([{
            command: '',
            output: welcomeOutput,
            timestamp: new Date()
        }]);

        // Focus input
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        // Scroll to bottom when new commands are added
        if (terminalRef.current) {
            terminalRef.current.scrollTo({
                top: terminalRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [commandHistory]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentInput.trim()) return;

        const command = currentInput.trim().toLowerCase();

        // Handle exit command
        if (command === 'exit') {
            onExit();
            return;
        }

        const output = executeCommand(command, portfolioData);

        setCommandHistory(prev => [...prev, {
            command: currentInput,
            output,
            timestamp: new Date()
        }]);

        setCurrentInput('');
        setHistoryIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const commands = commandHistory.filter(entry => entry.command).map(entry => entry.command);

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commands.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setCurrentInput(commands[commands.length - 1 - newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setCurrentInput(commands[commands.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setCurrentInput('');
            }
        }
    };

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-green-400/30">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-green-400">portfolio@terminal:~$</span>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={onExit}
                    className="text-green-400 hover:text-white hover:bg-green-400/20"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>

            {/* Terminal Content */}
            <div
                ref={terminalRef}
                className="flex-1 p-4 overflow-y-auto max-h-[calc(100vh-80px)]"
            >
                {commandHistory.map((entry, index) => (
                    <div key={index} className="mb-4">
                        {entry.command && (
                            <div className="flex items-center mb-2">
                                <span className="text-green-400">portfolio@terminal:~$ </span>
                                <span className="text-white ml-2">{entry.command}</span>
                            </div>
                        )}
                        <div
                            className={`${entry.command === '' ? 'flex flex-col items-center justify-center' : 'ml-0'
                                }`}
                        >
                            {entry.output.map((line, lineIndex) => (
                                <div
                                    key={lineIndex}
                                    className={`whitespace-pre-wrap ${entry.command === '' ? 'text-center' : ''
                                        }`}
                                >
                                    {line}
                                </div>
                            ))}
                        </div>

                    </div>
                ))}

                {/* Input Line */}
                <form onSubmit={handleSubmit} className="flex items-center mt-2">
                    <span className="text-green-400">portfolio@terminal:~$ </span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="ml-2 bg-transparent text-white outline-none caret-green-400 border-b border-green-400 focus:border-green-300 transition-all w-full max-w-xl"
                        autoComplete="off"
                        autoFocus
                    />
                </form>
            </div>
            <div className="p-4 border-t border-green-400/30">
                <Button
                    className="bg-white text-black border border-green-400 hover:bg-green-100"
                >
                    <span className="mr-2">{">_"}</span> CLI Mode
                </Button>
            </div>
        </div>
    );
};

export default CLITerminal;