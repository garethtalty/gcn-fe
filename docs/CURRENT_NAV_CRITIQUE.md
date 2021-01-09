# Current Nav Critique
## Good parts

1. The existing mobile 'hamburger' navicon is widely known and recognised as a place to find navigation elements on mobile apps.
2. List items have good touch targets, which is 375x52.
3. Open/close menu mechanism is 'nimble', that is; easy to open, close and interact with.

## Areas for improvement

1. Current menu does not implement the navigation menu using semantically correct `<nav>` elements. Accessibility has been considered by use of 'menu' and 'menubar' roles, however the omission of a `<nav>` landmark region would be a welcome addition for users using assistive technologies such as screen readers.
2. Conceptually, the navigation has been implemented as a 'full-screen' flat navigation menu. While this may be appropriate in some instances there are a number of drawbacks in this instance:
   - We run the risk of overwhelming the user with too much information
   - 'Context' is lost, due to the menu consuming 100% of the screen real-estate (on iPhone 6).
3. Existing hamburger icon has touch target of just 20x16. While 10x10 should be adequate for most users, this can be improved, particuarly for users with disabilities, by providing a larger touch target in the available space.

## Recommendations

Looking to Material Design principles for both Navigation and Menu, we can make some improvements to the existing navigation by ensuring the implementation is:
- Identifiable
- Organized
- Contextual
- Scannable

For the purposes of this task, this will be achieved by:
1. Implementing Material Design Navigation Drawer
2. Organising the information hierarchy of the menu items
3. Using semantically correct elements
