import { MatchData } from './MatchData';
import { WinAnalysis } from './analysis/WinAnalysis';
import { HtmlReport } from './reportTarget/HtmlReport';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	static winsAnalysisWithHtmlReport(team: string): Summary {
		return new Summary(new WinAnalysis(team), new HtmlReport());
	}

	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

	buildAndPrintReport(matches: MatchData[]): void {
		const output = this.analyzer.run(matches);
		this.outputTarget.print(output);
	}
}
