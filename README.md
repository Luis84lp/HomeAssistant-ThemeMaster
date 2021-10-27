# HomeAssistant-ThemeMaster
<p>Theme Master simplifies the process of creating or modifying a theme on Home Assistant.</p>
<h2>Installation instructions</h2>

<p>You will have to install <a href="https://github.com/Luis84lp/HomeAssistant-ThemeMaster">"HomeAssistant-ThemeMaster"</a> and <a href=" ">"card-tools"</a>.
<p>Follow <strong><a href="https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins">this</a></strong> guide to install both plugins.</p>

<h2>What can be done with Theme Master</h2>
                            <ul>
                                <li>Add CSS style properties from a dropdown list or manually.</li>
                                <li>Load existing themes without the need of installing them first.</li>
                                <li>Modify the imported themes or create new ones from scratch.</li>
                                <li>Changes will be reflected in real time.</li>
                                <p><strong>IMPORTANT:</strong> Theme Master will NOT permanently install your modified or created themes. Changes introduced by Theme Master are just temporay and as soon as you refresh the Home Assistant web page they will be reset. To install the modified themes you will have to copy the generated code, create a .yaml file, paste the code in it and install that theme file as usual on Home Assistant.</p>
                            </ul>
                            <img width="504" alt="Captura de pantalla 2021-10-27 a las 20 19 20" src="https://user-images.githubusercontent.com/59753051/139132479-bc5c3977-4c59-4e83-b0d7-02b2c18970fa.png">
                        <p>&nbsp;</p>
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
