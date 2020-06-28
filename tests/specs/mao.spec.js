describe('GAPO', () => {
    beforeEach(() => {
        // TabBar.waitForTabBarShown(true);
        // TabBar.openLogin();
        // LoginScreen.waitForIsShown(true);
    });

    it('Chat', () => {
        console.log('da vao');
        // const xpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.widget.RelativeLayout/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ImageView';
        // $(xpath).click();
        const chatXpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[3]/android.widget.ImageView';
        $(chatXpath).click();
        const firstUserXpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/androidx.viewpager.widget.ViewPager/android.view.ViewGroup/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.view.ViewGroup';
        $(firstUserXpath).click();
        const firstChatField = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText';
        $(firstChatField).click();
        $(firstChatField).setValue('Hihi 1');

        const sendButtonXpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.ImageView';
        $(sendButtonXpath).click();

        // $(firstChatField).click();
        // $(firstChatField).setValue('Hihi 2');
        // $(sendButtonXpath).click();

        // $(firstChatField).click();
        // $(firstChatField).setValue('Hihi 3');
        // $(sendButtonXpath).click();

        // $(firstChatField).click();
        // $(firstChatField).setValue('Hihi 4');
        // $(sendButtonXpath).click();

        // $(firstChatField).click();
        // $(firstChatField).setValue('Hihi 5');
        // $(sendButtonXpath).click();

        // $(firstChatField).click();
        // $(firstChatField).setValue('Hihi 6');
        // $(sendButtonXpath).click();

        const backXpath = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[1]/android.widget.ImageView[1]';
        $(backXpath).click();

        const from = {
            x: 100,
            y: 700,
        };
        const to = {
            x: 100,
            y: 100,
        };

        driver.touchPerform([{
            action: 'press',
            options: from,
        }, {
            action: 'wait',
            options: { ms: 1000 },
        }, {
            action: 'moveTo',
            options: to,
        }, {
            action: 'release',
        }]);
        driver.pause(1000);

        $(firstUserXpath).click();
        $(firstChatField).click();
        $(firstChatField).setValue('22222 ');
        $(sendButtonXpath).click();

        driver.setImplicitTimeout(5000);
    });
});
