# *More Better* Ctrl-W

This is a fork of [``better-ctrlw``](https://github.com/thalesmello/better-ctrlw)
with the following changes:

- Update to Chrome Extensions Manifest file format version 3, as version 2 is now deprecated.

- Add new command, *Delete back word*, that deletes word before the cursor
  in the focused edit control.

  - ALERT: Note that Chrome doesn't allow an Extension to interact with
    the address bar, other than to read or set the URL, but otherwise
    an extension cannot determine if the address bar has focus, or if
    the user has typed any additional input.

    Consequently, if the address bar has focus and you run the
    *Delete back word* command, it may instead delete the previous
    word from whatever input control on the page last had focus.

    Your best bet might be to use your window manager to implement
    this feature instead (and to leave this command disabled in this
    extension).

    - If you're on a Mac, consider using [Hammerspoon](https://www.hammerspoon.org/)
      (see below for how the author does it).

    - If you're on GNOME, there's probably a way to do it with a
      [GNOME Shell Extension](https://extensions.gnome.org/), but
      the author is still running MATE (which uses the Marco window
      manager), and I haven't dug into this.

- Add an [MIT license](https://github.com/landonb/more-better-ctrlw/blob/release/LICENSE).

## Installation

You can install this extension
[from the Chrome Web Store](https://chromewebstore.google.com/detail/more-better-ctrl-w/fhgdipcimngeleeemdhkinodbkkmcgjm?pli=1).

Or you can install this extension manually.

- This is especially useful if you sync extensions via your Google account,
  and you'd rather not have this extension loaded on all your hosts.

  - Specifically to the author, I use [Hammerspoon](https://www.hammerspoon.org/)
    to manage ``<Ctrl-W>`` on macOS.

    - By using Hammerspoon, ``<Ctrl-W>`` (Delete Back Word) also works in the
      address bar.

      You can find the Spoon code here:

      [https://github.com/DepoXy/macOS-Hammyspoony/blob/1.3.0/Source/AppTapChrome.spoon/init.lua#L86-L99](https://github.com/DepoXy/macOS-Hammyspoony/blob/1.3.0/Source/AppTapChrome.spoon/init.lua#L86-L99)

    - Also on macOS, it's easy to use macOS Settings > Keyboard Shortcuts
      to remap the "Close Tab" menu item to ``<Alt-W>``.

    - As such, the author only uses this extension on Linux, and I install
      it manually, and not through the Chrome Web Store.

- To install this extension manually, clone this repository and then
  install it:

  - Open Chrome Extensions (chrome://extensions).

  - Enable *Developer mode*.

  - Remove existing *More Better Ctrl-W* or *Better Ctrl-W* extensions,
    if installed.

  - Click *Load unpacked* button (upper-left), navigate to the directory
    you cloned to, and click *Select*.

  - And then configure the extension, e.g.,

    - Click *Keyboard shortcuts*

      - Assign "Alt + W" to *More Better Ctrl-W* > Close highlighted tabs

      - Assign "Ctrl + W" to *More Better Ctrl-W* > Delete back word

    - Click *Details*

      - Enable ✓ *Allow in Incognito*

*The [original ``better-ctrlw`` README](https://github.com/thalesmello/better-ctrlw/blob/ac0265ab9264ea6c6038df9d1b0fb671705b6955/README.md) follows:*

# Better Ctrl-W

Vim users are used to using the `Ctrl-w` key combination for deleting the  last
word when in insert mode. That's no problem for Mac OS users when using
chrome, as the keyboard shortcut for closing a tab is Cmd+w. This is a problem
when using the browser on either Linux or Windows machines, as `Ctrl-w` is the
shortcut for closing a window. So, when editing a text, a Vim user might
accidentally close the current tab by issuing a `Ctrl-w` command, sometimes losing
important text that was being edited.

That annoyance motivated people to discuss solutions on [a StackOverflow thread][1],
in which user [`samson`][2] commented he created [a Chrome extension][3] precisely to:

1. Assign `Ctrl-w` to an extension shortcut that does absolutely nothing
2. Assign a hotkey to close the current tab (I like to use `Alt-w` to mimic Mac OS's `Cmd+w`)

The problem with his extension is that it only works with the currently active tab,
and I regularly use `Shift + Click` to highlight a bunch of tabs, so that I can close them
all at once. His plugin didn't support multiple highlighted tabs, so I created my own.

# Install

You can install better-ctrlw via the [Chrome Web Store page][4].

# Usage

To use this plugin as it's intended, you have to set up the keyboard shortcuts after
installing it. Go to `chrome://extensions/shortcuts` and set the following shortcuts:

1. Assign `Do absolutely nothing` to `Ctrl-w`
2. Assign `Close highlighted tabs` to `Alt-w` or any other key combination of choice

This way, `Ctrl-w` will no longer close the current tab by mistake when editing it,
and you will be able to use `Alt-w` to close either the current of all highlighted tabs.

[1]: https://superuser.com/a/1207752
[2]: https://superuser.com/users/276658/samson
[3]: https://chrome.google.com/webstore/detail/ctrlw/goejokenmdamcapadhgghgpeeaeaaedc?hl=en
[4]: https://chrome.google.com/webstore/detail/better-ctrl-w/jfknaapblnppeflfamkegnnonlfgokhp/
