## DESCRIPTION

This is a simple JavaScript/CSS component that enables you to do Horizontal Pagination on a HTML website.
Panes can be scrolled left or right smoothly as if on a continuous reel. Panes are simply defined by using the 'pane' CSS class.

## USAGE

You'll need to have div to contain the panes and give it the CSS class 'pane-container'. You can then add panes inside the container,
which must have the CSS class 'pane':

    <div class="pane-container">
        <div class="pane"...>
        <div class="pane"...>
        <div class="pane"...>
    </div>

You also need to create the HPage JavaScript object. It works with jQuery so you'll need to do something like this:

    <script type="text/javascript">
        var hPage = undefined;

        $(document).ready(function () {
            hPage = new HPage({size:$('.pane').size()});
            hPage.start();
        });
    </script>
