declare namespace Team {
    interface member {
        name: string,
        major?: string,
        title: string,
        contact: string, // this becomes an href
        img?: string | undefined /* React.ImgHTMLAttributes<HTMLImageElement>.src */,
    }
    type members = Array<member>
    class Team {
        private members: members
        constructor(public members?: members)
        public addMember(name: member["name"], title: member["title"], contact: member["contact"], img: member["img"]): this
        public getMembers(): members
    }
}

export = Team.Team