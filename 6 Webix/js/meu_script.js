function saveData() {
  const form = $$("myForm");
  const formData = form.getValues();
  webix.message(
    `Salvando dados:<br>Nome: ${formData.nome}<br>Email: ${formData.email}`
  );
  console.log("Dados do formulário:", formData);
  form.clear();
}

webix.ready(function () {
  webix.ui({
    container: "app",

    margin: 20,
    rows: [
      {
        view: "form",
        id: "myForm",
        width: 350,
        elements: [
          {
            view: "template",
            template: "Formulário de Contato",
            type: "header",
          },
          {
            view: "text",
            label: "Nome",
            name: "nome",
            placeholder: "Digite seu nome",
          },
          {
            view: "text",
            label: "Email",
            name: "email",
            placeholder: "Digite seu email",
          },
          {
            view: "button",
            value: "Salvar",
            css: "webix_primary",
            click: saveData,
          },
        ],
      },
      {},
    ],
  });
});
