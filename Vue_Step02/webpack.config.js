const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')

const glob=require('glob');
var htmlPages=glob.sync('./src/*.html')
.map(path=>{
    var chunk= path.replace('.html','').replace('./src/','')
     return   new HtmlWebpackPlugin({
        template:path,
        filename:'pages/${chunk}.html',
        chunks:[chunk,'vendor'],
        inject:true
    })
})

module.exports={
    watch:true,
    entry:{
        index:'./src/js/index.js',
        about:'./src/js/about.js'
    },
    output:{
        filename:'js/[name]/[name].js',
        chunkFilename:'js/[name].js'
    },
    optimization:{
        splitChunks:{
            chunks:'all',
            name:'vendor'
        }
    },
    plugins:[
        // new HtmlWebpackPlugin({
        //     template:'./src/index.html',
        //     filename:'pages/index.html',
        //     chunks:['index','vendor'],
        //     inject:true
        // }),
        // new HtmlWebpackPlugin({
        //     template:'./src/about.html',
        //     filename:'pages/about.html',
        //     chunks:['about','vendor'],
        //     inject:true
        // })
        new CleanWebpackPlugin()
    ].concat(htmlPages)
}