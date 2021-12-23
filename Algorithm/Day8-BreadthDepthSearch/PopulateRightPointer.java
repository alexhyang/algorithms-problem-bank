public class PopulateRightPointer {
    class Node {
        public int val;
        public Node left;
        public Node right;
        public Node next;

        public Node() {}
        
        public Node(int _val) {
            val = _val;
        }

        public Node(int _val, Node _left, Node _right, Node _next) {
            val = _val;
            left = _left;
            right = _right;
            next = _next;
        }
    }

    public Node connect(Node root) {
        return connectNode(root);
    }

    private Node connectNode(Node node) {
        if (node == null) return null;
        if (node.left != null) node.left.next = node.right;
        if (node.right != null && node.next != null) node.right.next = node.next.left;
        connectNode(node.left);
        connectNode(node.right);
        return node;
    }
}
