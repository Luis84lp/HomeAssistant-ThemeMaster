customElements.whenDefined('card-tools').then(() => {
    class ThemeMaster extends cardTools.LitElement {


        setConfig(config) {
            this.theme = {};
            this.themeToApply = {};
            this.keys = [];
            this.themeYaml = "";
            this.name = "new_theme";
            this.knownStylesListPopulated = false;
            this.currentStyle;
            this.options = 
                {
                "#Card-Specific Modifications":{},
                    "ha-card-border-radius":                    {"info":"Cards border radious", "ex":"ex: 20px"},
                    "ha-card-background":                       {"info":"Cards background", "ex":"color | url"},
                    "ha-card-box-shadow":                       {"info":"Cards shadow", "ex":"3px 3px 13px -6px rgba(17,35,52,1)"},
                    "card-background-color":                    {"info":"Unused entities table background", "ex":"red"},
                    "paper-listbox-background-color":           {"info":"", "ex":"red"},
                    "paper-card-background-color":              {"info":"", "ex":"red"},
                    "code-editor-background-color":             {"info":"", "ex":"red"},
                    
                "#Main Colors":{},
                    "primary-color":                            {"info":"Primary color", "ex":"rgb(0, 175, 150)"},
                    "dark-primary-color":                       {"info":"Dark primary color", "ex":"rgb(0, 175, 150)"},
                    "light-primary-color":                      {"info":"Light primary color", "ex":"rgb(0, 175, 150)"},
                    "accent-color":                             {"info":"Accent color", "ex":"#ff9800"},
                    "accent-medium-color":                      {"info":"Accent medium color", "ex":"#ff9800"},
                    "app-header-background-color":              {"info":"Main header background color", "ex":"rgb(0, 175, 150)"},
                    "background-color":                         {"info":"Background color", "ex":"#ffffff"},
                    "secondary-background-color":               {"info":"Secondary background color", "ex":"#ffffff"},
                "#Text Colors":{},
                    "primary-text-color":                       {"info":"Primary text color", "ex":"red"},
                    "secondary-text-color":                     {"info":"Secondary text color", "ex":"#00AF96"},
                    "text-dark-color":                          {"info":"Secondary text color", "ex":"#00AF96"},
                    "text-medium-color":                        {"info":"Background color", "ex":"#80828A"},
                    "text-medium-light-color":                  {"info":"Text medium light color", "ex":"#A0A2A8"},
                    "disabled-text-color":                      {"info":"Disabled text Color", "ex":"#505050"},
                "#Icons Colors":{},
                    "text-primary-color":                       {"info":"Summary icons color", "ex":"rgb(0, 175, 150)"},
                    "paper-item-icon-color":                    {"info":"Icons color", "ex":"rgb(0, 175, 150)"},
                    "paper-item-icon-active-color":             {"info":"Active icon color", "ex":"rgb(0, 175, 150)"},
                    "state-icon-color":                         {"info":"", "ex":"red"},
                    "state-icon-active-color":                  {"info":"", "ex":"red"},
                    "state-icon-unavailable-color":             {"info":"Unavailable icon color", "ex":"red"},
                "#Sidebar Colors":{},
                    "sidebar-background-color":                 {"info":"Sidebar background color", "ex":"red"},
                    "sidebar-selected-background-color":        {"info":"Sidebar selected background color", "ex":"red"},
                    "sidebar-icon-color":                       {"info":"Sidebar icons color", "ex":"red"},
                    "sidebar-selected-icon-color":              {"info":"Sidebar selected icon color", "ex":"red"},
                    "sidebar-text-color":                       {"info":"Sidebar text color", "ex":"red"},
                    "sidebar-selected-text-color":              {"info":"Sidebar selected text color", "ex":"red"},
                    "divider-color":                            {"info":"Divider color", "ex":"#ff9800"},
                "#Sliders Colors":{},
                    "paper-slider-knob-color":                  {"info":"Sliders knob color", "ex":"red"},
                    "paper-slider-pin-color":                   {"info":"Sliders pin color", "ex":"red"},
                    "paper-slider-active-color":                {"info":"Sliders active color", "ex":"red"},
                    "paper-slider-secondary-color":             {"info":"Sliders secondary color", "ex":"red"},
                    "paper-slider-container-color":             {"info":"Sliders container color", "ex":"red"},
                    "paper-slider-font-color":                  {"info":"Sliders font color", "ex":"red"},
                "#Toggle Colors":{},
                    "paper-toggle-button-checked-bar-color":    {"info":"Toggle checked color", "ex":"red"},
                    "paper-toggle-button-checked-button-color": {"info":"", "ex":"red"},
                    "paper-toggle-button-unchecked-bar-color":  {"info":"", "ex":"red"},
                    "paper-toggle-button-unchecked-button-color":{"info":"", "ex":"red"},
                "#Switch Colors":{},
                    "switch-unchecked-color":                   {"info":"Switch unchecked color", "ex":"red"},
                    "switch-checked-button-color":              {"info":"Switch checked color", "ex":"red"},
                    "switch-unchecked-track-color":             {"info":"Switch unchecked track color", "ex":"red"},
                    "switch-checked-track-color":               {"info":"Switch checked track color", "ex":"red"},
                "#Radio Button Colors":{},
                    "paper-radio-button-checked-color":         {"info":"Radio button checked color", "ex":"red"},
                "#Popups":{},
                    "more-info-header-background":              {"info":"", "ex":"red"},
                    "paper-dialog-background-color":            {"info":"", "ex":"red"},
                "#Tables":{},
                    "table-row-background-color":               {"info":"", "ex":"red"},
                    "table-row-alternative-background-color":   {"info":"", "ex":"red"},
                "#Badges":{},
                    "label-badge-background-color":             {"info":"", "ex":"red"},
                    "label-badge-text-color":                   {"info":"", "ex":"red"},
                    "label-badge-red":                          {"info":"", "ex":"red"},
                    "label-badge-blue":                         {"info":"", "ex":"blue"},
                    "label-badge-green":                        {"info":"", "ex":"green"},
                    "label-badge-yellow":                       {"info":"", "ex":"yellow"},
                "#Input box":{},
                    "paper-input-container-focus-color":        {"info":"", "ex":"red"},
                "#Dropdowns":{},
                    "material-background-color":        {"info":"", "ex":"red"},
                    "material-secondary-background-color":        {"info":"", "ex":"red"},
                    "mdc-theme-surface":        {"info":"", "ex":"red"},
                "#Custom Header":{},
                    "ch-background":                            {"info":"", "ex":"red"},
                    "ch-active-tab-color":                      {"info":"", "ex":"red"},
                    "ch-notification-dot-color":                {"info":"", "ex":"red"},
                    "ch-all-tabs-color":                        {"info":"", "ex":"red"},
                    "ch-tab-indicator-color":                   {"info":"", "ex":"red"},
                "#Mini Mediaplayer":{},
                    "mini-media-player-base-color":             {"info":"", "ex":"red"},
                    "mini-media-player-accent-color":           {"info":"", "ex":"red"},
                "#Alarm":{},
                    "alarm-color-armed":                        {"info":"", "ex":"red"},
                    "alarm-color-disarmed":                     {"info":"", "ex":"red"},
                    "alarm-color-pending":                      {"info":"", "ex":"red"},
                    "alarm-color-triggered":                    {"info":"", "ex":"red"},
                    "alarm-color-autoarm":                      {"info":"", "ex":"red"},
                    "alarm-state-color":                        {"info":"", "ex":"red"},
                "#Fonts":                                       {},
                    "paper-font-common-base_-_font-family":     {"info":"Base text font","ex":"Open Sans, Helvetica Neue, sans-serif"},
                    "paper-font-common-code_-_font-family":     {"info":"Code font","ex":"Open Sans, Helvetica Neue, sans-serif"},
                    "paper-font-body1_-_font-family":           {"info":"Body 1 font","ex":"Open Sans, Helvetica Neue, sans-serif"},
                    "paper-font-subhead_-_font-family":         {"info":"Subhead font","ex":"Open Sans, Helvetica Neue, sans-serif"},
                    "paper-font-headline_-_font-family":        {"info":"Headline font","ex":"Open Sans, Helvetica Neue, sans-serif"},
                    "paper-font-caption_-_font-family":         {"info":"Caption font","ex":"Open Sans, Helvetica Neue, sans-serif"},
                    "paper-font-title_-_font-family":           {"info":"Title font","ex":"Open Sans, Helvetica Neue, sans-serif"},
                    "ha-card-header-font-family":               {"info":"Cards Header font","ex":"Open Sans, Helvetica Neue, sans-serif"}
                }; 
        }


        static get styles() {
            return cardTools.LitCSS`
            *   {
                    box-sizing: border-box;
                }
            
                ha-card {
                    width: 100%;
                    padding-left: 16px;
                    padding-right: 16px;
                }
                .side-by-side {
                    display: flex;
                }
            
                .column {
                    float: left;
                    width: 50%;
                    padding-left: 5px;
                    padding-right: 5px;
                }
                
                .row:after {
                    content: "";
                    display: table;
                    clear: both;
                }
                
                .paperInputMini {
                    padding-top: 0px;
                    padding-bottom: 0px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    height: 50px;
                }
                
                .center {
                    margin: 0;
                    position: relative;
                    top: 50%;
                    left: 50%;
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                }
                
                .center-horizontal {
                    margin: 0;
                    position: relative;
                    left: 50%;
                    -ms-transform: translate(-50%, 0px);
                    transform: translate(-50%, 0px);
                }
                
                .top-right {
                    margin: 10px;
                    position: absolute;
                    right: 0px;
                    top: 0px;
                }
                
                .modal-background {
                    display: none; /* Hidden by default */
                    position: fixed; /* Stay in place */
                    z-index: 1; /* Sit on top */
                    padding-top: 110px;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    overflow: auto; /* Enable scroll if needed */
                    background-color: rgba(0,0,0,0.4);
                }
                
                .modal-content {
                    background-color: #fefefe;
                    margin: auto;
                    padding: 20px;
                    border: 1px solid #888;
                    border-radius: 20px;
                    width: 80%;
                }
                
                .close {
                    color: #aaaaaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                }
                
                .close:hover,
                .close:focus {
                    color: #000;
                    text-decoration: none;
                    cursor: pointer;
                }
            `;
        }


        render() {
            if (this.knownStylesListPopulated === false) {
                this.updateComplete.then(() => {
                    this.populateSelect();
                });
            }
            
            return cardTools.LitHtml`
                <div id="modalBackground" class="modal-background">
                    <div id="modalContent" class="modal-content"">
                        <span class="close" @click="${this.closeInformationDialog}">&times;</span>
                           
                        <h1><center>Theme Master</center></h1>
                        <h2>GENERAL</h2>
                            <p>Theme Master simplifies the process of creating or modifying a theme on Home Assistant.</p>
                        <h2>What can be done with Theme Master</h2>
                            <ul>
                                <li>Add CSS style properties from a dropdown list or manually.</li>
                                <li>Load existing themes without the need of installing them first.</li>
                                <li>Modify the imported themes or create new ones from scratch.</li>
                                <li>Changes will be reflected in real time.</li>
                                <p><strong>IMPORTANT:</strong> Theme Master will NOT permanently install your modified or created themes. Changes introduced by Theme Master are just temporay and as soon as you refresh the Home Assistant web page they will be reset. To install the modified themes you will have to copy the generated code, create a .yaml file, paste the code in it and install that theme file as usual on Home Assistant.</p>
                            </ul>
                        <h2>&nbsp;</h2>
                        <h2>USAGE</h2>
                            <ul>
                                <h3>IMPORT A THEME:</h3>
                                    <li>Copy the theme yaml code and paste it in the large text area bellow the dropdown list. The theme will automatically load showing all the CSS properties included.</li>
                                <h3>EDIT A THEME:</h3>
                                    <li>You can edit the properties directly on the text area or using the text inputs created for each CSS property.</li>
                                    <li>You can add known CSS style properties using the dropdown list (not all the properties are included in this list) or manually write them.</li>
                                    <li>If you include a CSS property that is currently in use, it's current value will be shown at its right.</li>
                                    <li>Changes will be reflected in real time.</li>
                                <h3>COMMENTS:</h3>
                                    <li>Theme Master allows adding comments. If a line starts with the # character it will be treated as a comment.</li>
                                <h3>VARIABLES:</h3>
                                    <li>Theme Master allows using variables. You can create a variable and assign its value to different properties allowing you to change all of them by only modifying the variable value.</li>
                                    <li>To create a variable just add the name of your variable in the input box with the "New" label in it. <b>For example:</b> my-color</li>
                                    <li>Assing a value to that variable on the input box at its right. <b>For example:</b> rgb(0,175,150)</li>
                                    <li>To assing that variable to a property set "var(--my-color)" as its value. <b>For example:</b> "ha-card-background: var(--my-color)"</li>
                                <h3>RESET UNDECLARED PROPERTIES TO DEFAULT VALUES:</h3>
                                    <li>This button will remove the loaded CSS style properties and set them to their default values. Once again, this is temporay and as soon as you refresh the Home Assistant web page they will get the installed theme values (if any theme is installed).</li>
                            </ul>
                    </div>
                </div>
                <ha-card header="Theme Master">
                    <mwc-button id="btnInfo" class="top-right"
                        @click="${this.showInformationDialog}">
                        Information
                    </mwc-button>
                    <div id="classes" width="100%">
                        ${
                            this.keys.map((style, index) => {
                                var isComment = this.isComment(style);
                                let styleNoSpaces = style.replaceAll(" ","~");
                                let styleRecovered = style.replaceAll("~"," ");
                                return cardTools.LitHtml`
                                <div class="row" width="100%">
                                  <div class="column" style="width: ${isComment? '100%' : '50%'};">
                                    <paper-input class="paperInputMini"
                                        label="${isComment? "Comment" : this.getInfo(style)}"
                                        id="PRP-${isComment? styleNoSpaces : style}"
                                        .value="${isComment? styleRecovered : style}"
                                        .configValue="PRP:${isComment? styleNoSpaces : style}"
                                        @input="${this.styleChanged}"
                                    ></paper-input>
                                  </div>
                                  <div class="column" style="display: ${isComment? 'none' : 'block'};">
                                    <paper-input class="paperInputMini"
                                      label="${isComment? "" : this.getExample(style)}"
                                      .value="${isComment? "" : this.theme[style]}"
                                      .configValue="VAL:${isComment? styleNoSpaces : style}"
                                      id="VAL-${isComment? styleNoSpaces : style}"
                                      @input="${this.styleChanged}"
                                    ></paper-input>
                                  </div>
                                </div>
                                `;
                            })
                        }
                        <div class="row" width="100%">
                            <div class="column">
                                <paper-input class="paperInputMini" id="newStyleId" 
                                      label="New"
                                      .value=' '
                                      .configValue="${'NEW'}"
                                      @change="${this.styleChanged}">
                                </paper-input>
                            </div>    
                            <div class="column">
                                <paper-input class="paperInputMini"
                                    label="Value"
                                    disabled="true">
                                </paper-input>
                            </div>
                        </div>
                    
                        <div class="row" width="100%" style="height: 50px; position:relative;
                            height:60px; border: 2px solid primary-color; ">
                            <div class="column" style="height: 100%; width: 100%;">
                                <select id="selectId" class="center" style="width: 100%"
                                    @change="${this.onSelectChange}">
                                    	<option>Pick to add a new style property</option>
                                </select>
                            </div>
                        </div>    
                            
                        <textarea id="textarea-yaml"
                            style="width:100%; height: 300px; resize: none;"
                            @input="${this.textareaInput}"></textarea>
                          
                        <mwc-button class="center-horizontal"
                        @click="${this.copyToClipboard}">
                            Copy to clipboard
                        </mwc-button>
                        <mwc-button class="center-horizontal"
                        @click="${this.resetUndeclaredProperties}">
                            Reset undeclared properties to default values
                        </mwc-button>
                    </div>
                </ha-card>
                `;
        }


        populateSelect() {
            if (this.knownStylesListPopulated === false) {
                let select = this.shadowRoot.getElementById("selectId");
                var lastGroupId = "";
                Object.keys(this.options).forEach(key => {
                //for(var i = 0; i < this.options.keys.length; i++) {
                    var opt = key;
                    var element = "option";
                    var isGroup = false;
                    if (opt.substr(0,1) === "#") {
                        element = "optgroup";
                        isGroup = true;
                        lastGroupId = "ID-"+key;
                    }
                    
                    var el = document.createElement(element);
                    if (isGroup) {
                        el.id = lastGroupId;
                        el.label = opt.substr(1);
                        select.appendChild(el);
                    } else {
                        el.value = opt;
                        el.textContent = opt;
                        let containerGroup = this.shadowRoot.getElementById(lastGroupId);
                        containerGroup.appendChild(el);
                    }
                });
                this.knownStylesListPopulated = true;
            }
        }


        onSelectChange() {
            let select = this.shadowRoot.getElementById("selectId");
            if (this.keys.includes(select.value)) {
                this.shadowRoot.querySelector("ha-card #classes div div #VAL-" + select.value).focus();
            } else {
                this.shadowRoot.querySelector("ha-card #classes div div #newStyleId").value = select.value;
                this.shadowRoot.querySelector("ha-card #classes div div #newStyleId").focus();
                this.styleAddedBySelect(select);
            }
            select.options.selectedIndex = 0;
        }
    
    
        styleAddedBySelect(select) {
            let property = select.value;
            let value = "";
            let index = this.keys.indexOf(property.trim());
            if (index < 0) {
                this.keys.push(property.trim());
                    
                var currentValue = getComputedStyle(document.documentElement).getPropertyValue('--'+property);
                this.theme[property.trim()] = currentValue;
            } 
          
            this.themeYaml = this.exportTheme();
            
            this.updateThemeToApply();
            this.updateStyles(false);
            this.requestUpdate();
        
            this.updateComplete.then(() => {
                let textarea = this.shadowRoot.getElementById("textarea-yaml");
                textarea.value = this.themeYaml;
                
                this.shadowRoot.querySelector("ha-card #classes div div #newStyleId").value = "";
                this.shadowRoot.querySelector("ha-card #classes div div #VAL-" + property).focus();
                this.shadowRoot.querySelector("ha-card #classes div div #VAL-" + property).inputElement.inputElement.select();
            });
        }


        textareaInput(ev) {
            let content = ev.target.value;
            this.importTheme(content);
            this.themeYaml = this.exportTheme();
        }


        styleChanged(ev) {
            let cmd = ev.target.configValue.substr(0,3);
            var property = ev.target.configValue.substr(4);
            if (this.isComment(property)) {
                property = property.replaceAll(" ","~").trim();
            }
            let value = ev.target.value;
            
            if (cmd === "NEW") {
                property = value;
                value = "";
                ev.target.value = "";
                
                if (this.isComment(property)) {
                    let indexFirstCharacter = property.search(/\S|$/);
                    property = property.substr(indexFirstCharacter).trim().replaceAll(" ", "~");
                } else {
                    let commentIndex = property.indexOf("#");
                    if (commentIndex != -1) {
                        property = property.substr(0, commentIndex);
                    }
                    property = property.trim().replaceAll(" ", "-");
                    property = property.trim().replaceAll(".", "");
                }
          
                let index = this.keys.indexOf(property.trim());
                if (index < 0) {
                    this.keys.push(property.trim());
                    
                    value = getComputedStyle(document.documentElement).getPropertyValue('--'+property);
                    this.theme[property.trim()] = value;
                } else {
                    this.keys[index] = property.trim();
                }
            }
            
            if (cmd === "PRP") {
                let oldprop = property;
                property = value;
                if (this.isComment(property)) {
                    let indexFirstCharacter = property.search(/\S|$/);
                    property = property.substr(indexFirstCharacter).trim().replaceAll(" ", "~");
                } else {
                    property = property.trim().replaceAll(" ", "-");
                    property = property.trim().replaceAll(".", "");
                }
                value = this.theme[oldprop];
                delete this.theme[oldprop];
          
                let index = this.keys.indexOf(oldprop.trim());
                if (index < 0) {
                    if (!this.keys.includes(property.trim())) {
                        this.keys.push(property.trim());
                    }
                } else {
                    this.keys[index] = property.trim();
                    let indexToDelete = this.keys.indexOf(property.trim());
                }
            
                if (property.trim() === "") {
                    delete this.theme[property];
                    let indexToDelete = this.keys.indexOf(property);
                    this.keys.splice(indexToDelete, 1);
                }
            }
            
            if (property.trim() !== "") {
                this.theme[property.trim()] = value;
            }
            
            this.themeYaml = this.exportTheme();
            this.updateComplete.then(() => {
                let textarea = this.shadowRoot.getElementById("textarea-yaml");
                textarea.value = this.themeYaml;
            });
            
            this.updateThemeToApply();
            this.updateStyles(false);
            this.requestUpdate();
            
            if (cmd === "NEW") {
                if (!this.isComment(property)) {
                    this.updateComplete.then(() => {
                        this.shadowRoot.querySelector("ha-card #classes div div #VAL-" + property).focus();
                        this.shadowRoot.querySelector("ha-card #classes div div #VAL-" + property).inputElement.inputElement.select();
                    });
                } else {
                   this.shadowRoot.querySelector("ha-card #classes div div #newStyleId").focus();
                }
            }
        }


        importTheme(yaml) {
            const lines = yaml.split('\n');
            this.name = lines[0].trim().substr(0,lines[0].trim().length - 1) || "new_theme";
            this.theme = {};
            this.themeToApply = {};
            this.keys = [];
            for(var i = 1; i < lines.length; i++) {
                var line = lines[i];
                let isComment = this.isComment(line);
                if (!isComment && !line.includes(":")) continue;
                if (isComment) {
                    let indexFirstCharacter = line.search(/\S|$/);
                    line = line.substr(indexFirstCharacter);
                    let lineNoSpaces = line.trim().replaceAll(" ", "~");
                    if (!this.keys.includes(lineNoSpaces)) {
                        this.keys.push(lineNoSpaces);
                    }
                    this.theme[lineNoSpaces] = "";
                } else {
                    // Remove comments (Anything after # unless the # is within quotes)
                    line = line.replace(/"[^"]*"|'[^']*'|(#.*)/g, (m, g1) => {
                        if(g1) return '';
                        return m;
                    });
                    var property = line.split(":")[0].trim();
                    var preValue = line.split(/:(.+)/)[1];
                    if (!preValue) preValue = "";
                    const value = preValue.trim().replace(/^['"]|['"]$/g,'');
                    property = property.replaceAll(" ", "-").replaceAll(".", "");
                    if (property.trim() !== "") {
                        if (!this.keys.includes(property.trim())) {
                            this.keys.push(property.trim());
                        }
                        this.theme[property.trim()] = value;
                    }
                }
            }
            
            this.updateThemeToApply();
            this.updateStyles(false);
            this.requestUpdate();
            
            this.updateComplete.then(() => {
                let textarea = this.shadowRoot.getElementById("textarea-yaml");
                textarea.value = this.themeYaml;        
            });
        }


        exportTheme() {
            let exp = this.name + ":";
            this.keys.forEach((key) => {
                if (this.isComment(key)) {
                    key = key.replaceAll("~", " ");
                    exp += `\n  ${key}`;
                } else {
                    if(this.theme[key].includes('"')) {
                        exp += `\n  ${key}: '${this.theme[key]}'`;
                    } else {
                        exp += `\n  ${key}: "${this.theme[key]}"`;
                    }
                }
            });
            exp += `\n  `;
            return exp;
        }


        updateThemeToApply() {
            this.themeToApply = [];
            Object.keys(this.theme).forEach((style) => {
                let index = style.search(/\S|$/);
                if (style.substr(index,1) !== "#") {
                    const styleValue = this.theme[style];
                    var realValue = styleValue;
                    if (styleValue.length > 6 && styleValue.substr(0,6) == "var(--") {
                        realValue = styleValue.substr(6);
                        if (realValue.substr(realValue.length-1) == ")") {
                            realValue = realValue.substr(0, realValue.length-1);
                        } 
                        this.themeToApply[style] = this.theme[realValue];    
                    } else {
                        this.themeToApply[style] = realValue;
                    }
                }
            });
        }


        updateStyles(deleteCurrentValues) {
            if (deleteCurrentValues) {
                document.querySelector("html").removeAttribute("style");
            }
            Object.keys(this.themeToApply).forEach((style) => {
                document.querySelector("html").style.setProperty("--"+style, this.themeToApply[style]);
            });
        }


        showInformationDialog() {
            var modal = this.shadowRoot.getElementById("modalBackground");
            modal.focus();
            modal.style.display = "block";
        }


        closeInformationDialog() {
            var modal = this.shadowRoot.getElementById("modalBackground");
            modal.style.display = "none";
        }


        isComment(text) {
            // Find index of first non space character
            let indexFirstCharacter = text.search(/\S|$/);
            return text.substr(indexFirstCharacter,1) === "#";
        }


        resetUndeclaredProperties() {
            this.updateThemeToApply();
            this.updateStyles(true);
            this.requestUpdate();
        }


        copyToClipboard(){
            let textarea = this.shadowRoot.getElementById("textarea-yaml");
            var text = textarea.value;
            navigator.clipboard.writeText(text).then(function() {
                console.log('COPIED:\n' + text );
            }, function(err) {
                console.error('ERROR: Could not copy text: ', err);
            });
        }


        getInfo(property) {
            var info = "Variable";
            if (Object.keys(this.options).includes(property)) {
                const propertyData = this.options[property];
                if (propertyData.info !== "") {
                    info = propertyData.info;
                }
            }
            return info;
        }


        getExample(property) {
            var example = "Value";
            if (Object.keys(this.options).includes(property)) {
                const propertyData = this.options[property];
                if (propertyData.ex !== "") {
                    example = propertyData.ex;
                }
            }
            return example;
        }


    }
    customElements.define('theme-master', ThemeMaster);
    window.customCards = window.customCards || [];
    window.customCards.push({
        type: "theme-master",
        name: "Theme Master",
        preview: true, // Optional - defaults to false
        description: "Theme Master - Master Home Assistant themes!" // Optional
    });
});

window.setTimeout(() => {
    if(customElements.get('card-tools')) return;
        customElements.define('theme-master', class extends HTMLElement{
        setConfig() { throw new Error("Can't find card-tools. See https://github.com/thomasloven/lovelace-card-tools");}
    });
}, 2000);


