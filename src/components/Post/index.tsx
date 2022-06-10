function Post(){
    return(
        <div className={'tw-p-5 tw-bg-white tw-rounded-xl tw-border-gray-200 tw-border'}>
            <div className={'tw-flex tw-justify-between'}>
                <div className={'tw-flex'}>
                    <img src="http://graph.facebook.com/2740869062847369/picture?type=square" className={'tw-rounded-full'} alt=""/>
                    <div className={'tw-ml-2 tw-flex tw-flex-col tw-justify-center'}>
                        <div className={'tw-font-bold'}>Tuan NGuyen</div>
                        <div className={'tw-text-xs'}>9 ngay truoc</div>
                    </div>
                </div>
            </div>
            <div className={'tw-flex tw-justify-between tw-mt-5'}>
                <div>1 binh luan</div>
                <div>An binh luan</div>
            </div>
        </div>
    )
}

export default Post;