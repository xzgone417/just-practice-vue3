
//首页列表
type More_keProItem = {
    id: string,
    title: string,
    cover: string,
    fmnum: string,
    user_id: string,
    viewnum: string,
    content: string,
    favnum: string,
}

type More_keProItemIProps = Readonly<{
    list: More_keProItem[],
    getmore():any,
    hasmore:boolean,
    reload():void
}>
