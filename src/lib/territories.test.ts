import { describe, expect, it } from "vitest";
import { TERRITORIES, getTerritory } from "./territories";

describe("territories", () => {
  it("expone las 8 parroquias del cantón Zamora", () => {
    expect(TERRITORIES).toHaveLength(8);
  });

  it("cada parroquia tiene al menos una fuente citada", () => {
    for (const territory of TERRITORIES) {
      expect(territory.sources.length).toBeGreaterThan(0);
    }
  });

  it("getTerritory encuentra una parroquia existente por slug", () => {
    const zamora = getTerritory("zamora");
    expect(zamora?.name).toBe("Zamora");
    expect(zamora?.type).toBe("urbana");
  });

  it("getTerritory devuelve undefined para un slug inexistente", () => {
    expect(getTerritory("no-existe")).toBeUndefined();
  });

  it("no tiene slugs duplicados", () => {
    const slugs = TERRITORIES.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
