import { get } from './firebase'

async function getKnowledge() {
  let knowledge = await get("knowledge")
  return knowledge;
}

export { getKnowledge }