type Props ={
    name:string;
};


export default function taskname({name}:Props){
    return(
         <div>
      <h2>プロジェクト名：{name}</h2>
    </div>
    );
}