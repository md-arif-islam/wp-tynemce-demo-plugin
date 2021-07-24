;(function () {
    tinyMCE.PluginManager.add('tmcd_plugin', function (editor, url) {

        editor.addButton('tmcd_button_one', {
            //text: 'B1',
            //icon: 'backcolor',
            image: url + "/../images/cart.png",
            onclick: function () {
                editor.insertContent('Hello Arif');
            }
        });

        editor.addButton('tmcd_listbox', {
            type: 'listbox',
            text: 'Select Something',
            values: [
                {text: 'Apple', value: 'You have selected <b>Apple</b>'},
                {text: 'banana', value: 'You have selected <b>banana</b>'},
                {text: 'Orange', value: 'You have selected <b>Orange</b>'},
            ],
            onselect: function () {
                editor.insertContent(this.value())
            }
        });


        editor.addButton('tmcd_menu', {
            type: 'menubutton',
            text: 'Choices',
            menu: [
                {
                    text: 'Option A',
                    menu: [
                        {
                            text: 'Option B',
                            onclick: function () {
                                editor.insertContent('Hello Arif');
                            }
                        },

                        {
                            text: 'Option A',
                            menu: [
                                {
                                    text: 'Option B',
                                    onclick: function () {
                                        editor.insertContent('Hello Arif');
                                    }
                                }
                            ]
                        }
                    ]
                },

                {

                    text: 'Option B',
                    onclick: function () {
                        editor.insertContent('Hello Arif');
                    }
                }
            ]

        });


        editor.addButton('tmcd_form_button', {
            text: 'Form',
            onclick: function () {
                editor.windowManager.open({
                    title: "Use Input Form",
                    body: [
                        {
                            type: 'textbox',
                            name: 'userinput1',
                            lable: "Some Text",
                            value: "Hello"
                        },

                        {
                            type: 'colorpicker',
                            name: 'userinput2',
                            lable: "Color Picker",
                            value: "#222222"
                        }

                    ],
                    onsubmit: function (e) {
                        console.log(e);
                        editor.insertContent(e.data.userinput1 + " " + e.data.userinput2);
                    }
                });
            }
        });
    })
})();