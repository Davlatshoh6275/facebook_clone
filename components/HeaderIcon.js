function HeaderIcon({ Icon, active }) {
    return (
        <div className="cursor-pointer md:px-10 md:py-5 sm:text-xl md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group " >
            <Icon  className={`h-5 text-gray-500 group-hover:text-blue-500 ${active && "text-blue-500"} `} />
        </div>
    )
}

export default HeaderIcon