<?php
    define("ROOT", "./");
    include_once(ROOT."resources/2021/itemModel.php");

    $itemName = $_GET['itemname'];
?>

<main class="itemPage">
    <section class="detail">
        <div class="innerDetail">
            <?php foreach ($itemModel as $key => $val): ?>
                <?php if ($key == $itemName): ?>
                    <picture>
                        <source srcset="./resources/2021/img/items/<?=$key?>/<?=$val['splogo']?>" media="(max-width: 768px)" />
                        <source srcset="./resources/2021/img/items/<?=$key?>/<?=$val['pclogo']?>" media="(min-width: 769px)" />
                        <img src="./resources/2021/img/items/<?=$key?>/<?=$val['pclogo']?>" alt="<?=$val['name']?>" />
                    </picture>
                    <p><?=$val['name']?></p>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
    </section>
</main>
