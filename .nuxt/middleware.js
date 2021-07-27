const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['isLogin'] = require('..\\middleware\\isLogin.js')
middleware['isLogin'] = middleware['isLogin'].default || middleware['isLogin']

export default middleware
