const qs=[
{q:'500원을 찾아보세요!',c:['10원','50원','100원','500원'],a:'500원'},
{q:'가장 큰 지폐는?',c:['1000원','5000원','10000원','50000원'],a:'50000원'},
{q:'1000원 5장은?',c:['3000원','5000원','10000원','50000원'],a:'5000원'}
];
let i=0;
function render(){
question.textContent=qs[i].q;
choices.innerHTML='';
result.textContent='';
qs[i].c.forEach(v=>{
 let b=document.createElement('button');
 b.className='choice';b.textContent=v;
 b.onclick=()=>check(v);
 choices.appendChild(b);
});
}
function check(v){
result.textContent=v===qs[i].a?'🎉 정답!':'😊 다시 생각해보자!';
result.style.color=v===qs[i].a?'green':'red';
}
function nextQuestion(){i=(i+1)%qs.length;render();}
render();