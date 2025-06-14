// data/publications.ts
export interface Publication {
  title: string;
  authors: string;
  journal?: string;
  volume?: string;
  pages?: string;
  year: number;
  doi?: string;
}

export const publications: Publication[] = [
  {
    title:
      "Microstructural and electron framework engineered 3D NiSeP integrated CuFe composite as trifunctional electrocatalyst in sensing and urea-assisted water splitting applications",
    authors:
      "A. Farithkhan, N.S.K. Gothaman*, R. S. Kumar, K. Alagumalai,  W. S. Chang*, S. Meenakshi*",
    journal: "Journal of Materials Chemistry A",
    // volume: "42",
    // pages: "101–110",
    year: 2024,
    // doi: "10.1000/xyz456",
  },
  {
    title:
      "Unveiling the morphological influence of nitrogen-doped carbonized wood anchored 3D transition metal oxide microarchitectures on catalytic activity: A trifunctional electrocatalyst for sensing and energy conversion",
    authors:
      "A. Farithkhan, N. S. K. Gowthaman*, L. Sivakumar, S. Abraham John, W. S. Chang, S. Meenakshi*",
    journal: "Chemical Engineering Journal",
    volume: "480",
    pages: "148187",
    year: 2024,
    doi: "https://doi.org/10.1016/j.cej.2023.148187",
  },
  {
    title:
      "Zero-, one- and two-dimensional carbon nanomaterials as low-cost catalysts in optical and electrochemical sensing of biomolecules and environmental pollutants",
    authors:
      "N. S. K. Gowthaman, M. Amalraj, S. Kesavan, K. Rajalakshmi, S. Shankar, B. Sinduja, P. Arul, R. Karthikeyan, C. Loganathan, V. M. Gowri, J. Kappen, A. Ajith, W. S. Chang*",
    journal: "Microchemical Journal",
    year: 2023,
    volume: "194",
    pages: "109291",
    doi: "https://doi.org/10.1016/j.microc.2023.109291",
  },
];
