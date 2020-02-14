// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import FroalaEditor from 'react-froala-wysiwyg';

// Expose jQuery.
window.$ = $;
window.jQuery = $;

// Add MathType plugin to Froala toolbar.
const toolbar = ['undo', 'redo' , 'bold', '|', 'wirisEditor', 'wirisChemistry', '|', 'insertImage','html'];
const froalaConfiguration = {
  // Add the custom buttons in the toolbarButtons list, after the separator.
  iframe: true,
  charCounterCount: false,
  imageEditButtons: ['wirisEditor', 'wirisChemistry', 'imageRemove'],
  toolbarButtons: toolbar,
  toolbarButtonsMD: toolbar,
  toolbarButtonsSM: toolbar,
  toolbarButtonsXS: toolbar,
  htmlAllowedTags: ['.*'],
  htmlAllowedAttrs: ['.*'],
  htmlAllowedEmptyTags: ['mprescripts'],
  imageResize : false,
  key: 'CA5D-16E3A2E3G1I4A8B8A9B1D2rxycF-7b1C3vyz==',
  heightMax: 310,
  useClasses: false
};

// Renderize.
ReactDOM.render(<FroalaEditor onManualControllerReady={(options) => {
  // Include MathType for FroalaEditor.
  require('../node_modules/@wiris/mathtype-froala/wiris.js');
  options.initialize();
}} config={ froalaConfiguration } tag='textarea'/>, document.getElementById('root'));

