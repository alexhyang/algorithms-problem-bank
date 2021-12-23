public class MergeBT {
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode() {}
        TreeNode(int val) { this.val = val; }
        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        return merge(root1, root2);
    }

    private TreeNode merge(TreeNode node1, TreeNode node2) {
        if (node1 == null && node2 == null) return null;
        if (node1 == null && node2 != null) return node2;
        if (node1 != null && node2 == null) return node1;
        return new TreeNode(node1.val + node2.val, 
                            merge(node1.left, node2.left), 
                            merge(node1.right, node2.right)); 
    }
}