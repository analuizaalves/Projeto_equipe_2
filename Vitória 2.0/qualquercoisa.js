db.Aluno.insertMany([
{nome: "Iarley", cpf: "875.356.246-25", sexo: "M"},
{nome: "Italo", cpf: "352.564.754-25", sexo: "M"},
{nome: "Anjogos", cpf: "534.675.343", sexo: "M"}]
)

db.Aluno.updateOne({nome: "Iarley"}, {$set: {cpf:"875.356.246-25"}})