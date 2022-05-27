<?php if (isset($_GET['debug'])): ?>
<?php // if (strtotime(date('Y-m-d H:i')) < strtotime('2022-07-01 00:00')):?>
    <?php // include_once("inc/2022/header.php");?>
    <?php // include_once("inc/2022/item.php");?>
    <?php // include_once("inc/2022/footer.php");?>
<?php else: ?>
    <?php include_once("inc/2021/header.php"); ?>
    <?php include_once("inc/2021/item.php"); ?>
    <?php include_once("inc/2021/footer.php"); ?>
<?php endif; ?>
