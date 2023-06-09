<template>
    <footer>
        <h4>último acesso no dia {{ data }}</h4>
        <p>copyright ©</p>
    </footer>   
</template>

<script>
export default {
    name: 'FooterTime',
    props: {
        msg: String
    },
    data: function () {
        return {
            data: new Date().toLocaleDateString(),
        }
    }
}
</script>

<style>
    footer {
        width: 99%;
        position: absolute;
        bottom: 0;
    }

    footer h4 {
        float: left;
    }

    footer p {
        float: right;
    }
</style>