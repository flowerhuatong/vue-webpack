exports.use = function (Mock){
  let Random = Mock.Random;
  Mock.mock('/blog/articleQurey', {
  	'data|10-30':[{
  		'id|+1': 1,
  		'articleTitle|15-50':'@character("upper")',
        'articleContent':'@paragraph()'		
  	}]
  })
}