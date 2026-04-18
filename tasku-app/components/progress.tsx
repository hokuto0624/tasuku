type Props ={
    progress:number;
};


export default function progress({progress}:Props){
    return(
        <div>
            <p>タスク進捗度：{progress}%</p>
        </div>
    );
}