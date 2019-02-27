//get_time.js
const dateTimeRecognizers = require('@microsoft/recognizers-text-date-time');
const chinese = dateTimeRecognizers.Culture.Chinese;
module.exports=function(req,res){
    const decode = decodeURI(req.params.str,"UTF-8");
    console.log(decode)
    const result = dateTimeRecognizers.recognizeDateTime(decode,chinese);
    //判断结果是否为空
    if(result.length!=0&&result!=null){
        const text = result[0].resolution.values[0].value;
        res.json({status:true,time:text})
    }else{
        res.json({status:false,time:"0"})
    }
}