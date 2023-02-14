/**
 * Three function example that I came across
 */
function outerscope(){
    const result=[];
    function innerScope(){
        for(let i=0;i<5;i++){
            //This is just storing the execution of the inner function
            result[i]=(function inner(x){
                //additiional enclosing context
                return function(){
                    console.log(x);
                };
            })(i);
        }
    }
    innerScope();

    for(let i=0;i<5;i++){
        result[i]();
    }
}
outerscope();