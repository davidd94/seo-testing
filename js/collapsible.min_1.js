define(['ko','jquery','underscore','../template/renderer'],function(ko,$,_,renderer){'use strict';var collapsible,defaults;defaults={closeOnOuter:true,onTarget:false,openClass:'_active',as:'$collapsible'};collapsible={open:function(){this.opened(true);},close:function(){this.opened(false);},toggle:function(){this.opened(!this.opened());}};function onOuterClick(container,model,e){var target=e.target;if(target!==container&&!container.contains(target)){model.close();}}
function getClassBinding(model,name){var binding={};binding[name]=model.opened;return{css:binding};}
function buildConfig(options){if(typeof options!=='object'){options={};}
return _.extend({},defaults,options);}
ko.bindingHandlers.collapsible={init:function(element,valueAccessor,allBindings,viewModel,bindingCtx){var $collapsible=Object.create(collapsible),config=buildConfig(valueAccessor()),outerClick,bindings;_.bindAll($collapsible,'open','close','toggle');$collapsible.opened=ko.observable(!!config.opened);bindingCtx[config.as]=$collapsible;if(config.closeOnOuter){outerClick=onOuterClick.bind(null,element,$collapsible);$(document).on('click',outerClick);ko.utils.domNodeDisposal.addDisposeCallback(element,function(){$(document).off('click',outerClick);});}
if(config.openClass){bindings=getClassBinding($collapsible,config.openClass);ko.applyBindingsToNode(element,bindings,bindingCtx);}
if(config.onTarget){$(element).on('click',$collapsible.toggle);}
if(viewModel&&_.isFunction(viewModel.on)){viewModel.on({close:$collapsible.close,open:$collapsible.open,toggleOpened:$collapsible.toggle});}}};ko.bindingHandlers.closeCollapsible={init:function(element,valueAccessor,allBindings,viewModel,bindingCtx){var name=valueAccessor()||defaults.as,$collapsible=bindingCtx[name];if($collapsible){$(element).on('click',$collapsible.close);}}};ko.bindingHandlers.openCollapsible={init:function(element,valueAccessor,allBindings,viewModel,bindingCtx){var name=valueAccessor()||defaults.as,$collapsible=bindingCtx[name];if($collapsible){$(element).on('click',$collapsible.open);}}};ko.bindingHandlers.toggleCollapsible={init:function(element,valueAccessor,allBindings,viewModel,bindingCtx){var name=valueAccessor()||defaults.as,$collapsible=bindingCtx[name];if($collapsible){$(element).on('click',$collapsible.toggle);}}};renderer.addAttribute('collapsible').addAttribute('openCollapsible').addAttribute('closeCollapsible').addAttribute('toggleCollapsible');});