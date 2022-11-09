const repos = [
    'andatoshiki/toshiki-live2d',
    'guansss/pixi-live2d-display',
];

const folderBlacklist = [
    // mature models... _(:ι」∠)_
    'andatoshiki/toshiki-live2d/galgame live2d/UnHolY ToRturEr',
    'andatoshiki/toshiki-live2d/galgame live2d/LOVE³-LOVE CUBE-',
    'andatoshiki/toshiki-live2d/galgame live2d/[200228] [North Box] モノノ系彼女',
    'andatoshiki/toshiki-live2d/galgame live2d/[200229][同人ゲーム][マメック星] 雑貨屋さんの若女将 [RJ279692]',
    'andatoshiki/toshiki-live2d/galgame live2d/[200328][虚夢浮遊物体] ソムニア掌編―薔薇色― [RJ282471]',
    'andatoshiki/toshiki-live2d/galgame live2d/[200502][らぷらす] プリンセスハーレム [RJ280657]',
    'andatoshiki/toshiki-live2d/galgame live2d/[MountBatten] Live2Dで動くイソップ寓話',
    'andatoshiki/toshiki-live2d/galgame live2d/[ぬぷ竜の里] ルインズシーカー live2d',
    'andatoshiki/toshiki-live2d/galgame live2d/[めがみそふと] 【Live2D】コン狐との日常+(ぷらす)',
    'andatoshiki/toshiki-live2d/galgame live2d/カスタムcute ～俺と彼女の育成バトル！～',
    'andatoshiki/toshiki-live2d/galgame live2d/異世界で俺はエロ経営のトップになる！',
    'andatoshiki/toshiki-live2d/galgame live2d/神楽黎明記～Live2d',
];

const fileBlacklist = [
    // broken file
    'andatoshiki/toshiki-live2d/Sacred Sword princesses/model.json',

    // mature models
    'andatoshiki/toshiki-live2d/Sacred Sword princesses/boss_cg_live2d_h004/.model.json',
    'andatoshiki/toshiki-live2d/Sacred Sword princesses/char_cg_live2d_h048/.model.json',

    // non-model zip
    'andatoshiki/toshiki-live2d/少女咖啡枪 girls cafe gun/UnityLive2DExtractor+for+ガール・カフェ・ガン.zip',
];

const mocWhitelist = [
    // these moc files are already specified in their settings files
    'andatoshiki/toshiki-live2d/Sacred Sword princesses/boss_cg_live2d_h004/res/iderhelamodel.moc',
    'andatoshiki/toshiki-live2d/Sacred Sword princesses/char_cg_live2d_007/res/dorlamodel.moc',
    'andatoshiki/toshiki-live2d/Sacred Sword princesses/char_cg_live2d_049/res/airmanirmodel.moc',
    'andatoshiki/toshiki-live2d/Sacred Sword princesses/char_cg_live2d_h048/res/ainir.moc',
];

module.exports = {
    repos,
    folderBlacklist,
    fileBlacklist,
    mocWhitelist,
}
