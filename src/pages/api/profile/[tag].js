export default async function handler(req, res) {
  const tag = req.query.tag
  const apiRes = await fetch(`${process.env.API_URL}/players/${encodeURIComponent(tag)}`, {headers:{
    'Authorization': `Bearer ${process.env.TOKEN}`
  }})
  console.log(apiRes)
  const data = await apiRes.json()
  res.json({
    tag,
    data
  });
}