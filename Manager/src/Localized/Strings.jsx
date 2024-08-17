const strings = {
     Login: {
          title: "Métrica Gestor",
          username: ["Usuário", "digite seu usuário"],
          password: ["Senha", "digite sua senha"],
          submitBtn: "Entrar"
     },
     Home: {
          hi: "Olá",
          searchTopics: ["Pesquisas Ativas", "Historico"],
          noResult: "Vazio"
     },
     Progress: {
          title: "Selecione a pesquisa",
          noResult: "Nehuma Pesquisa"
     },
     Component: {
          ToggleMenu: [
               ["Inicio", "Home"],
               ["Progresso", "Progress"],
               // ["Nova Pesquisa", "NewSearch"],
               // ["Resultados", "Result"],
          ]
     },
     Modal: {
          Login: ["Usuário ou Senha inválido.", "Confirmar"],
     },
     Cards: {
          Search: {
               protocol: (i) => `Número de Protocolo da Pesquisa: ${i}`,
               info: "Informações:",
               introBlock: (i) => `Identificação: ${i} pergunta(s)`,
               mainBlock: (i) => `Principal: ${i} pergunta(s)`,
               qtdPeople: (i) => `${i} entrevistadores(s)`,
               subTitle: (i) => `Meta: ${i}`
          }
     },
     charColors: [
          "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf", "#ff9896",
          "#f0a202", "#00798c", "#d81159", "#8f2d56", "#218380", "#73d2de", "#b07aa1", "#ffbc42", "#e4572e", "#a8c686", "#1a1b41",
          "#ff6f61", "#6b4226", "#4b3f72", "#2a4d69", "#4b86b4", "#adcbe3", "#e7eff6", "#63ace5", "#ee4b6a", "#d9bf77", "#f7c59f",
          "#80ced7", "#d782ba", "#c06c84", "#355c7d", "#6c5b7b", "#c06c84", "#f67280", "#ffab4c", "#f15bb5"
     ]
};


module.exports = strings;
