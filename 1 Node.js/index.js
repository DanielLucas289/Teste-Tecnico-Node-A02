function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}

// função run chamando fetchData com async/await
async function run() {
  console.log("Iniciando o processo...");
  try {
    // O 'await' pausa a função aqui até que a Promise de fetchData() seja resolvida.
    const data = await fetchData();

    console.log("Sucesso:", data);
  } catch (error) {
    console.error("Ocorreu um erro ao buscar os dados:", error);
  }
}

run();
