import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

export default function FormComponent() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [descricao, setDescricao] = useState("");

  const [dadosEnviados, setDadosEnviados] = useState(null);
  const [erro, setErro] = useState("");

  function enviar() {
    if (
      !nome.trim() ||
      !curso.trim() ||
      !disciplina.trim() ||
      !descricao.trim()
    ) {
      setErro("Por favor, preencha todos os campos.");
      setDadosEnviados(null);
      return;
    }

    setErro("");

    setDadosEnviados({
      nome,
      curso,
      disciplina,
      descricao,
    });

    setNome("");
    setCurso("");
    setDisciplina("");
    setDescricao("");
  }

  useEffect(() => {
    console.log("Aplicativo iniciado com sucesso!");
  }, []);

  function renderErro() {
    if (!erro) return null;

    return <Text style={styles.erro}>{erro}</Text>;
  }

  function renderResultado() {
    if (!dadosEnviados) return null;

    return (
      <View style={styles.resultado}>
        <Text style={styles.subtitulo}>Dados Enviados:</Text>
        <Text style={styles.resultText}>Nome: {dadosEnviados.nome}</Text>
        <Text style={styles.resultText}>Curso: {dadosEnviados.curso}</Text>
        <Text style={styles.resultText}>
          Disciplina: {dadosEnviados.disciplina}
        </Text>
        <Text style={styles.resultText}>
          Descrição: {dadosEnviados.descricao}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <View style={styles.formCard}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />

        <Text style={styles.label}>Curso</Text>
        <TextInput
          placeholder="Digite seu curso"
          value={curso}
          onChangeText={setCurso}
          style={styles.input}
        />

        <Text style={styles.label}>Disciplina</Text>
        <TextInput
          placeholder="Digite a disciplina"
          value={disciplina}
          onChangeText={setDisciplina}
          style={styles.input}
        />

        <Text style={styles.label}>Descrição</Text>
        <TextInput
          placeholder="Fale um pouco sobre você"
          value={descricao}
          onChangeText={setDescricao}
          style={[styles.input, styles.textArea]}
          multiline
          numberOfLines={3}
        />

        <View style={styles.botao}>
          <Button title="Enviar" onPress={enviar} />
        </View>

        {renderErro()}
      </View>

      {renderResultado()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  formCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    color: "#444",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 90,
    textAlignVertical: "top",
  },
  botao: {
    marginTop: 10,
  },
  erro: {
    color: "#d9534f",
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultado: {
    marginTop: 25,
    padding: 15,
    backgroundColor: "#e6f7ff",
    borderRadius: 10,
    elevation: 3,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resultText: {
    fontSize: 15,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    margin: 5,
  },
});
