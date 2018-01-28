
export class MathClient {
    public async pow(base: number, exponent: number): Promise<number> {
        const res = await fetch(`/api/math/pow/${base}/${exponent}`);
        const json = await res.json();
        return json.result;
    }
}
