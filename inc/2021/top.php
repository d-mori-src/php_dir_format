<?php
    include_once(ROOT."inc/2021/init.php");
    include_once(ROOT."resources/2021/itemModel.php");
?>
<main class="top">
    <section>
        <div>
            <div>
                <?php foreach ($itemModel as $key => $val): ?>
                    <a
                        href="/item?itemname=<?=$key?>"
                        class="smoothScroll">
                        <?=$val['name']?>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>