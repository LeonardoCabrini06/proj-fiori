sap.ui.getCore().attachInit(() => {

    const model = new sap.ui.model.json.JSONModel({
        formulario: {
            nome: "",
            idade: "",
            altura: "",
            sexo: "M"
        },
        tabela: []
    })

    const title = new sap.m.Title({
        text: "Formulário"
    })
    const f_nome = new sap.m.Input({
        placeholder: "Digite seu nome",
        value: "{dados>/formulario/nome}"
    })
    const f_idade = new sap.m.Input({
        placeholder: "Digite sua idade",
        type: sap.m.InputType.Number,
        value: "{dados>/formulario/idade}"
    })
    const f_altura = new sap.m.Input({
        placeholder: "Digite sua altura",
        type: sap.m.InputType.Number,
        value: "{dados>/formulario/altura}"
    })

    const f_sexo = new sap.m.Select({
        selectedKey: "{dados>/formulario/sexo}",
        items: [

            new sap.ui.core.Item({
                key: "M",
                text: "Masculino"
            }),

            new sap.ui.core.Item({
                key: "F",
                text: "Feminino"
            })

        ]

    })

    const tabelaM = new sap.m.Table({
        columns: [
            new sap.m.Column({
                header: new sap.m.Text({
                    text: "Nome"
                })
            }),
            new sap.m.Column({
                header: new sap.m.Text({
                    text: "Idade"
                })
            }),
            new sap.m.Column({
                header: new sap.m.Text({
                    text: "Altura"
                })
            }),
            new sap.m.Column({
                header: new sap.m.Text({
                    text: "Sexo"
                })
            }),  
        ],
        mode: "Delete",
        delete: (evt) => {  

            const item = evt.getParameter("listItem").getBindingContext("dados").getPath()
            const indice = item.split("/").pop()
            const tab = model.getProperty("/tabela")

            tab.splice(indice,1)
            model.refresh()
        }
        }).bindAggregation("items", {
        path: "dados>/tabela",
        template: new sap.m.ColumnListItem({

            cells: [
                new sap.m.Text({
                    text: "{dados>Nome}"
                }),
                new sap.m.Text({
                    text: "{dados>Idade}"
                }),
                new sap.m.Text({
                    text: "{dados>Altura}"
                }),
                new sap.m.Text({
                    text: "{dados>Sexo}"
                })
            ]
        })
    })

    const tabelaGrid = new sap.ui.table.Table({
        title: "Tabela Grid",
        visibleRowCount: 5,
        rows: "{dados>/tabela}",
        columns: [

            new sap.ui.table.Column({
                label: new sap.m.Label({
                    text: "Nome"
                }),
                template: new sap.m.Text({
                    text: "{dados>Nome}"
                })
            }),

            new sap.ui.table.Column({
                label: new sap.m.Label({
                    text: "Idade"
                }),
                template: new sap.m.Text({
                    text: "{dados>Idade}"
                })
            }),

            new sap.ui.table.Column({
                label: new sap.m.Label({
                    text: "Altura"
                }),
                template: new sap.m.Text({
                    text: "{dados>Altura}"
                })
            }),

            new sap.ui.table.Column({
                label: new sap.m.Label({
                    text: "Sexo"
                }),
                template: new sap.m.Text({
                    text: "{dados>Sexo}"
                })
            })
        ]
    })

    const btn_add = new sap.m.Button({
        text: "Inserir Usuário",
        type: "Accept",
        width: "100%",
        icon: "sap-icon://add-employee",

        press: () => {

            const formulario = model.getProperty("/formulario")

            if (formulario.nome === "" || formulario.idade === "" || formulario.altura === "") {
                sap.m.MessageToast.show("Preencha todos os campos")
                return
            }

            if (Number(formulario.idade) <= 0) {
                sap.m.MessageToast.show("Idade inválida")
                return
            }

            if (Number(formulario.altura) <= 0) {
                sap.m.MessageToast.show("Altura inválida")
                return
            }

            const tabela = model.getProperty("/tabela")

            tabela.push({
                Nome: formulario.nome,
                Idade: formulario.idade,
                Altura: formulario.altura,
                Sexo: formulario.sexo === "M" ? "Masculino" : "Feminino"
            })

            model.refresh()
            model.setProperty("/formulario", {
                nome: "",
                idade: "",
                altura: "",
                sexo: "M"
            })
        }
    })

    const hBoxTab = new sap.m.HBox({
    items: [
        tabelaM,
        tabelaGrid
    ],
    gap: "20px",
    width: "100%"
    })

    const vBox = new sap.m.VBox({
        items: [
            title,
            f_nome,
            f_idade,
            f_altura,
            f_sexo,
            btn_add,
            hBoxTab
        ],
        width: "60%",
        gap: "10px"
    }).setModel(model, "dados").placeAt("conteudo")

})