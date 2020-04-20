import { CountVectorizer } from 'machinelearn/feature_extraction';

let x = []
let y = []
let model = null

function train(knowledge) {
  knowledge.forEach(({ questions }, idx) => {
    x = x.concat(questions.map(question => getHash(question)))
    y = y.concat(Array(questions.length).fill(idx))
  })
  model = new CountVectorizer()
  model.fit_transform(x);
}

function getAnswer(knowledge, question) {
  let sim_arr = []
  let vector = model.transform([getHash(question)])[0];
  model.transform(x).forEach(vectorK => {
    let similarity = cosinesim(vector, vectorK)
    sim_arr.push(similarity)
  })
  let idx_max_sim = sim_arr.indexOf(Math.max(...sim_arr))
  let answers = knowledge[y[idx_max_sim]].answers
  return answers
}

function clean(text) {
  text = text.toLowerCase()
  text = text.replace(/[^@_a-zá-úñÑ0-9\s]/g, ' ') // remove other characters
  text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accent
  text = text.trim().split(/\s+/) // remove extra spaces
  return `_${text.join('_')}_` // adding '_'
}

function getHash(text) {
  text = clean(text)
  let hash_arr = []
  for (let i = 0; i < text.length - 2; i++) {
    hash_arr.push(text.substring(i, i + 3));
  }
  return hash_arr.join(' ')
}

function cosinesim(A, B) {
  var dotproduct = 0;
  var mA = 0;
  var mB = 0;
  for (let i = 0; i < A.length; i++) { // here you missed the i++
    dotproduct += (A[i] * B[i]);
    mA += (A[i] * A[i]);
    mB += (B[i] * B[i]);
  }
  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);
  var similarity = (dotproduct) / ((mA) * (mB)) || 0 // here you needed extra brackets
  return similarity;
}

export { train, getAnswer }