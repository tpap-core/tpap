/*! caja-kissy  */
KISSY.config({debug:!0,packages:[{name:"openjs",tag:"20130527",path:"../../assets",charset:"utf8"}]}),KISSY.ready(function(){KISSY.use("sizzle,"+cajaConfig.modules||"",function(n){var t=n.makeArray(arguments);t.splice(0,2),TShop.Balcony.setup(t,function(){jasmine.getEnv().addReporter(new jasmine.TrivialReporter),jasmine.getEnv().execute()})})});