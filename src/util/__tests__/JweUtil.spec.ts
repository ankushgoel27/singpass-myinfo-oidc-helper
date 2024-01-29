import { extractJwtHeader } from "../JweUtil";


describe("extractJwtHeader", () => {
	it("should extract JWT header", () => {
		const SAMPLE_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
		expect(extractJwtHeader(SAMPLE_JWT)).toStrictEqual({
			"alg": "HS256",
			"typ": "JWT"
		});
	});
});
