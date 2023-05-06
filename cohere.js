const cohere = require('cohere-ai');
const mongoose = require('mongoose')

const dbURI = "mongodb+srv://turtleman:test123@cluster0.yc8zhlh.mongodb.net/MetHacks?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to db")
    })
    .catch((err) => {
        console.log(err)
    })

cohere.init('N34VA0KQyvqt7grPCRNVqRorWX6pmMCWBIXzBoaV')

const examples = [
    { text: "On the Electrodynamics of Moving Bodies", label: "Physics" },
    { text: "The Origin of Species by Means of Natural Selection", label: "Biology" },
    { text: "The Interpretation of Dreams", label: "Psychology" },
    { text: "The General Theory of Relativity", label: "Physics" },
    { text: "The Double Helix: A Personal Account of the Discovery of the Structure of DNA", label: "Genetics" },
    { text: "The Mathematical Theory of Communication", label: "Mathematics" },
    { text: "The Structure of Scientific Revolutions", label: "Philosophy" },
    { text: "The Selfish Gene", label: "Genetics" },
    { text: "The Nature of the Chemical Bond", label: "Chemistry" },
    { text: "The Logic of Scientific Discovery", label: "Philosophy" },
    { text: "The Feynman Lectures on Physics", label: "Physics" },
    { text: "The Economic Consequences of the Peace", label: "Economics" },
    { text: "The Wealth of Nations", label: "Economics" },
    { text: "The Communist Manifesto", label: "Political Science" },
    { text: "The Social Contract", label: "Philosophy" },
    { text: "The Prince", label: "Political Science" },
    { text: "The Republic", label: "Philosophy" },
    { text: "The Wealth and Poverty of Nations", label: "Economics" },
    { text: "The Structure of DNA", label: "Genetics" },
    { text: "The Double-Edged Helix: Science in the Real World", label: "Genetics" },
    { text: "The Big Bang: The Origin of the Universe", label: "Cosmology" },
    { text: "The Search for the Higgs Boson", label: "Physics" },
    { text: "The Evolution of Cooperation", label: "Biology" },
    { text: "The Adaptive Landscape in Evolutionary Biology", label: "Biology" },
    { text: "The Role of Mathematics in Biology", label: "Mathematics" },
    { text: "The Role of Experience in Infant Development", label: "Psychology" },
    { text: "The Linguistic Structure of Modern English", label: "Linguistics" },
    { text: "The Limits of Artificial Intelligence", label: "Computer Science" },
    { text: "The Art of Computer Programming", label: "Computer Science" },
    { text: "The Science of Programming", label: "Computer Science" },
    { text: "The Design of Operating Systems for Small Computers", label: "Computer Science" },
    { text: "The Search for Extra-Terrestrial Intelligence", label: "Astronomy" },
    { text: "The Formation and Evolution of Planetary Systems", label: "Astronomy" },
    { text: "The Birth of Stars and Planets", label: "Astronomy" },
    { text: "The Science of Climate Change", label: "Environmental Science" },
    { text: "The Effects of Ocean Acidification on Marine Ecosystems", label: "Oceanography" },
    { text: "The Theory of Everything", label: "Physics" },
    { text: "The Theory of Plate Tectonics", label: "Geology" },
    { text: "The Anatomy of the Human Body", label: "Anatomy" },
    { text: "The Role of Dopamine in Reward-Seeking Behavior", label: "Neuroscience" },
    { text: "The Structure of Proteins", label: "Biochemistry" },
    { text: "The Mechanisms of Enzyme Catalysis", label: "Biochemistry" },
    { text: "The Genetic Control of Embryonic Development", label: "Developmental Biology" },
    { text: "The Structure and Function of Cell Membranes", label: "Cell Biology" },
    { text: "The Ecology of Coral Reefs", label: "Ecology" },
    { text: "The Diversity of Life on Earth", label: "Biodiversity" },
    { text: "The Evolution of Human Intelligence", label: "Anthropology" },
    { text: "The Nature of Dark Matter", label: "Astrophysics" },
    { text: "The Origin of the Solar System", label: "Astrophysics" },
    { text: "On Computable Numbers, with an Application to the Entscheidungsproblem", label: "Math" },
    { text: "A New Kind of Science", label: "Math" },
    { text: "The Unreasonable Effectiveness of Mathematics in the Natural Sciences", label: "Math" },
    { text: "Non-Cooperative Games", label: "Math" },
    { text: "A Mathematical Theory of Communication", label: "Math" },
    { text: "The Large Sieve and its Applications", label: "Math" },
    { text: "The Structure of Scientific Revolutions", label: "Math" },
    { text: "The Mathematics of Arbitrage", label: "Math" },
    { text: "The Geometry of Hamiltonian Systems", label: "Math" },
    { text: "The Navier-Stokes Equations", label: "Math" },
    { text: "General Relativity and Gravitational Waves", label: "Physics" },
    { text: "Quantum Mechanics and the Foundations of Physics", label: "Physics" },
    { text: "The Theory of Superconductivity", label: "Physics" },
    { text: "The Standard Model of Particle Physics", label: "Physics" },
    { text: "The Chemical Basis of Morphogenesis", label: "Chemistry" },
    { text: "The Discovery of Fullerenes", label: "Chemistry" },
    { text: "The Hydrogen Bond and the Water Molecule", label: "Chemistry" },
    { text: "The Structure of Proteins: Two Hydrogen-Bonded Helical Configurations of the Polypeptide Chain", label: "Chemistry" },
    { text: "The Origin of Species by Means of Natural Selection", label: "Biology" },
    { text: "The Double Helix: A Personal Account of the Discovery of the Structure of DNA", label: "Biology" },
    { text: "The Role of Chromosomal Change in Plant Evolution", label: "Biology" },
    { text: "The Molecular Basis of Heredity", label: "Biology" },
    { text: "The Structure of Tobacco Mosaic Virus", label: "Biology" },
    { text: "The Embryonic Development of Drosophila Melanogaster", label: "Biology" },
    { text: "The Brain as a Self-Organizing System", label: "Neuroscience" },
    { text: "The Anatomy of the Horse", label: "Anatomy" },
    { text: "The Origin of the Species and Races, and the Antiquity of Man Deduced from the Theory of 'Natural Selection'", label: "Anthropology" },
    { text: "The Diversity of Life", label: "Biodiversity" },
    { text: "Cellular Automata and the Growth of Crystals", label: "Cell Biology" },
    { text: "The Large Scale Structure of Space-Time", label: "Cosmology" },
    { text: "Molecular Control of Vertebrate Limb Development", label: "Developmental Biology" },
    { text: "The Ecological Role of Bacteria in the Ocean", label: "Ecology" },
    { text: "Environmental Science: A Global Concern", label: "Environmental Science" },
    { text: "The Principles of Stratigraphy", label: "Geology" },
    { text: "The Structure of Language: Readings in the Philosophy of Language", label: "Linguistics" },
    { text: "The Oceanic Lithosphere", label: "Oceanography" }

];
const inputs = [
  "Mathematics of Trigonometry",
  "Evolutionary Biology",
  "The Centripedal Force of Gravity",
  "Animal evolution",
];

(async () => {
  const response = await cohere.classify({
    inputs: inputs,
    examples: examples,
  });

  console.log(response.body.classifications[0]["prediction"]);
  
  for (let i = 0; i < response.body.classifications.length; i++) {
    console.log(response.body.classifications[i]["prediction"])
  }


})();


