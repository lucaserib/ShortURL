import Link from "./Link";

describe("Link creation", () => {
  test("Should create a link", () => {
    const link = new Link("cubosacademy", "https://cubos.academy");

    expect(link).toHaveProperty("identifier", "cubosacademy");
    expect(link).toHaveProperty("url", "https://cubos.academy");
    expect(link).toHaveProperty("visits", 0);
  });
});
