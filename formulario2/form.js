sap.ui.getCore().attachInit(()=>{

    const title = new sap.m.Title({
        text: 'Formulário'
    })

    const f_nome = new sap.m.Input({
        placeholder: 'Digite seu nome',
        type: 'Text'
    })

    const f_idade = new sap.m.Input({
        placeholder:'Digite sua idade (anos)',
        type: sap.m.InputType.Number
    })

    const f_altura = new sap.m.Input({
        placeholder: 'Digite sua altura (m)',
        type: sap.m.InputType.Number
    })

    const f_sexo = new sap.m.Select({
        items: [
            new sap.ui.core.Item({
                key: 'M',
                text: 'Masculino'
            }),
            new sap.ui.core.Item({
                key:'F',
                text:'Feminino'
            })
        ]
    })

    const tabelaGrid = new sap.ui.table.Table({
        title: "Tabela Grid",
        visibleRowCount: 5,
        columns: [
            new sap.ui.table.Column({
                label: new sap.m.Label({ text: "Nome" }),
                template: new sap.m.Text()
            }),
            new sap.ui.table.Column({
                label: new sap.m.Label({ text: "Idade" }),
                template: new sap.m.Text()
            }),
            new sap.ui.table.Column({
                label: new sap.m.Label({ text: "Altura" }),
                template: new sap.m.Text()
            }),
            new sap.ui.table.Column({
                label: new sap.m.Label({ text: "Sexo" }),
                template: new sap.m.Text()
            })
        ]
    })

    const table = new sap.m.Table({

        columns: [

            new sap.m.Column({
                header: new sap.m.Text({
                text:'Nome'
                })
            }),

            new sap.m.Column({
                header: new sap.m.Text({
                text:'Idade'
                })
            }),

            new sap.m.Column({
                header: new sap.m.Text({
                text:'Altura'
                })
            }),

            new sap.m.Column({
                header: new sap.m.Text({
                text:'Sexo'
                })
            })

        ]

    })

    const btn_add = new sap.m.Button({
        type: 'Accept',
        text: 'Inserir Usuário',
        width: '100%',
        icon: 'sap-icon://add-employee',

        press:()=>{
            const v_nome = f_nome.getValue()
            const v_idade = Number(f_idade.getValue())
            const v_altura = Number(f_altura.getValue())
            const temp = f_sexo.getSelectedItem()
            const v_sexo = temp.getText()

            if (v_nome === "" || v_idade === "" || v_altura === "") {
                sap.m.MessageToast.show("Preencha todos os campos!")
                return
            }

            if (v_idade <= 0) {
                sap.m.MessageToast.show("Informe uma idade válida")
                return
            }

            if (v_altura <= 0) {
                sap.m.MessageToast.show("Informe uma altura válida")
                return
            }

            const linha = new sap.m.ColumnListItem({
                cells: [

                    new sap.m.Text({
                        text: v_nome
                    }),

                    new sap.m.Text({
                        text: v_idade
                    }),

                    new sap.m.Text({
                        text: v_altura
                    }),

                    new sap.m.Text({
                        text: v_sexo
                    })

                ]

            })

            const linhaGrid = new sap.ui.table.Row({
                cells: [
                    new sap.m.Text({
                        text: v_nome 
                    }),
                    new sap.m.Text({ 
                        text: v_idade 
                    }),
                    new sap.m.Text({ 
                        text: v_altura 
                    }),
                    new sap.m.Text({
                        text: v_sexo 
                    })
                ]
            })
            tabelaGrid.addRow(linhaGrid)

            table.addItem(linha)

            f_nome.setValue("")
            f_idade.setValue("")
            f_altura.setValue("")

        }

    })

    const vBox = new sap.m.VBox({
        items: [
            title,
            f_nome,
            f_idade,
            f_altura,
            f_sexo,
            btn_add,
            table,
            tabelaGrid
        ],
        width: '30%',
        rowGap: '10px'
    })
    
    vBox.placeAt('conteudo')
})