/*jshint laxcomma:true*/
require.config({
	baseUrl: ''
,	paths: {
		'jquery': 'lib/jquery/jquery-2.0.3'
	,	'backbone': 'lib/backbone'
	,	'underscore': 'lib/underscore'
	,	'bootstrap': 'lib/bootstrap/js/bootstrap'

	,	'Application': 'src/Application'
	,	'FolderDDManager': 'src/util/FolderDDManager'
	,	'Main': 'src/Main'

	,	'BaseView': 'src/ui/BaseView'
	,	'LayoutView': 'src/ui/LayoutView'

	,	'html-templates': 'build/template-output'
	}
,	shim: {
		'backbone': {
			deps: ['underscore','jquery']
		}
	,	'bootstrap': {
			deps: ['jquery']
		}

	// ,	'Main':{deps: ['Application']}
	// ,	'Application': {deps: ['FolderDD']}
	}
});