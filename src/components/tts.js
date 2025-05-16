
import { useState } from "react";
import { useRemark } from "react-remarkify";
import { useSpeech } from "react-text-to-speech";
import { HiMiniStop, HiVolumeOff, HiVolumeUp } from "react-text-to-speech/icons";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

function MarkdownText({ text }) {
	const [showMarkdown, setShowMarkdown] = useState(true);
	const reactContent = useRemark({
		markdown: text,
		rehypePlugins: [rehypeRaw, rehypeSanitize],
		remarkPlugins: [remarkGfm],
		remarkToRehypeOptions: { allowDangerousHtml: true },
	});
	const { Text, speechStatus, start, pause, stop } = useSpeech({ text: showMarkdown ? reactContent : text, highlightText: true });

	return (
		<div className="flex flex-col space-y-3 p-4 text-justify">
			<div className="flex w-fit flex-col items-center space-y-2">
				<button className="rounded-sm border-2 border-black bg-gray-100 px-1 py-0.5 text-sm" onClick={() => setShowMarkdown((prev) => !prev)}>
					Toggle Markdown
				</button>
				<div className="flex space-x-4">
					<span role="button">{speechStatus !== "started" ? <HiVolumeUp title="Start speech" onClick={start} /> : <HiVolumeOff title="Pause speech" onClick={pause} />}</span>
					<span role="button">
						<HiMiniStop title="Stop speech" onClick={stop} />
					</span>
				</div>
			</div>
			<div className="prose prose-th:w-screen prose-th:max-w-full prose-th:border prose-td:border prose-th:p-2 prose-td:p-2 prose-ul:whitespace-normal prose-ol:whitespace-normal prose-headings:my-1 prose-pre:my-1 grid max-w-full grid-cols-1 whitespace-pre-wrap break-words *:my-0 *:w-full *:whitespace-pre-wrap">
				<Text />
			</div>
		</div>
	);
}

export default function App() {
	return <MarkdownText text={`# react-text-to-speech\nThis library is awesome`} />;
}