export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Méthode non autorisée"
    });
  }

  try {
    return res.status(200).json({
      ok: true,
      clips: [],
      message: "ClipForgeAI API fonctionne correctement."
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error.message
    });
  }
}
