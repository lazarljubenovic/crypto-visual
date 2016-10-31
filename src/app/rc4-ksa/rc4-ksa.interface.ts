export interface Rc4KsaState {
    n: number;
    key: string[];
    i: number;
    j: number;
    jExpression: {
        previousJ: string,
        sI: string,
        keyI: string,
    };
    S: number[];
    historyS: number[][];
}
