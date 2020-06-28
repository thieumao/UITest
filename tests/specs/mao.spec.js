describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(() => {
        // TabBar.waitForTabBarShown(true);
        // TabBar.openLogin();
        // LoginScreen.waitForIsShown(true);
    });

    it('should be able click successfully', () => {
        console.log('da vao');
        // const xpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.RelativeLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ImageView';
        // $(xpath).click();
        const chatXpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[3]/android.widget.ImageView';
        $(chatXpath).click();
        const firstUserXpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.view.ViewGroup'; 
        $(firstUserXpath).click();
        const firstChatField = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText';
        $(firstChatField).click();
        $(firstChatField).setValue('Hihi');
        // console.log('da vao 2');
        // console.log('da vao 3');
        // console.log('da vao 4');
        driver.setImplicitTimeout(50000);
    });
});
