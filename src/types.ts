export type Measure = {
  title: string;
  instructions?: string;
  options: {
    name: string;
    party?: string;
    totalVotes: number;
    percent: number;
    absenteeMailVotes: number;
    absenteeWalkInVotes: number;
    pollsVotes: number;
    timelyAbs: number;
    provisionalBallotCount: number;
  };
};

export type Results = {
  date: Date;
  kind: string;
  lastUpdated: string;
  measures: Measure[];
};
